import type {
  QuestionsPromptForms,
  StrategyPromptForms,
} from "$lib/types/globalInterfaces";
import questions from "../Data/strategy_questions.json";

export function getStrategyQuestion(strategy: number): QuestionsPromptForms[] {
  const strategyForm: StrategyPromptForms | undefined = questions.find(
    (q) => q.strategy === strategy
  );

  if (strategyForm) {
    return strategyForm.forms;
  } else {
    return [];
  }
}
