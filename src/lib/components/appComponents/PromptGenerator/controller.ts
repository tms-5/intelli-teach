import type {
  PromptForms,
  QuestionsPromptForms,
} from "$lib/types/globalInterfaces";

export class PromptGeneratorController {
  private forms: PromptForms = { strategy: 0 };

  changeChooseStrategy = (strategy: number) => {
    this.forms = { strategy: strategy };
  };

  changeForm(key: string, value: string | number | string[] | boolean) {
    this.forms[key] = value;
    return this.validateForm();
  }

  initializeForms(questions: QuestionsPromptForms[]) {
    questions.forEach((question) => {
      if (question.mandatory && this.forms[question.key] === undefined) {
        this.forms[question.key] = "";
      }
    });
  }

  validateForm() {
    return Object.values(this.forms).some(
      (value) => value === "" || value == -1
    );
  }

  getCustomText = (text: string): string => {
    return this.extractAndCheckPlaceholders(text);
  };

  extractAndCheckPlaceholders(templateString: string): string {
    const regex = /\{([^}]+)\}/g;
    let match;
    const placeholders = [];

    while ((match = regex.exec(templateString)) !== null) {
      placeholders.push(match[1]);
    }

    const filledText = templateString.replace(regex, (match, placeholder) => {
      if (Object.keys(this.forms).includes(placeholder)) {
        return this.forms[placeholder].toString();
      }
      return match;
    });

    return filledText;
  }

  get getSelectedStrategy() {
    return this.forms.strategy;
  }

  get getFormsData() {
    return this.forms;
  }
}
