import type {
  StrategyContext,
  StrategyContexts,
  StrategyPrompt,
  StrategyPrompts,
} from "$lib/types/globalInterfaces";

export function getContextForStrategy(
  strategy: number,
  contexts: StrategyContext[]
): StrategyContexts[] | undefined {
  return contexts.find((context) => context.strategy === strategy)?.contexts;
}

export function getPromptForStrategy(
  strategy: number,
  prompts: StrategyPrompts[]
): StrategyPrompt[] | undefined {
  return prompts.find((prompt) => prompt.strategy === strategy)?.prompts;
}
