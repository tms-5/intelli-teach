export interface StrategyPromptForms {
  strategy: number;
  forms: QuestionsPromptForms[];
}

export interface QuestionsPromptForms {
  type: string;
  question: string;
  mandatory: boolean;
  key: string;
  options?: string[];
}

export interface PromptForms {
  strategy: number;
  [key: string]: string | number | string[] | boolean;
}

export interface StrategyContext {
  strategy: number;
  contexts: StrategyContexts[];
}

export interface StrategyContexts {
  version: string;
  context: string;
}

export interface StrategyPrompts {
  strategy: number;
  prompts: StrategyPrompt[];
}

export interface StrategyPrompt {
  version: string;
  prompt: string;
}

export interface SelectOption {
  value: any;
  label: string;
}
