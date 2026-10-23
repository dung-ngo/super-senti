import { GlossaryTerm } from '../types/game';

export const GLOSSARY_TERMS: Record<string, GlossaryTerm> = {
  'ai-red-teaming': {
    id: 'ai-red-teaming',
    term: 'AI Red Teaming',
    simpleDefinition: 'Stress-testing an AI system by probing it with challenging prompts to discover blind spots, risks, or unintended biases.',
    extendedExplanation: 'Originating in cybersecurity, red teaming in AI involves deliberately asking questions to see where an AI gives inconsistent, harmful, or unexamined answers before it is deployed widely.',
    whyItMatters: 'It helps researchers find where models quietly ignore non-human interests, like animal habitats or moral uncertainty.'
  },
  'llm': {
    id: 'llm',
    term: 'LLM (Large Language Model)',
    simpleDefinition: 'A pattern-prediction AI trained on massive volumes of text to generate human-like writing.',
    extendedExplanation: 'LLMs predict likely words based on statistical associations in their training data. Because the vast majority of web text reflects human-centered perspectives, LLMs frequently replicate those biases.',
    whyItMatters: 'LLMs produce fluent text without experiencing or understanding feelings, making evaluation of their outputs critical.'
  },
  'human-centered-bias': {
    id: 'human-centered-bias',
    term: 'Human-Centered Bias (Anthropocentrism)',
    simpleDefinition: 'The tendency to evaluate problems and decisions solely through the lens of human interests, convenience, and economic gain.',
    extendedExplanation: 'When an AI assumes that only human health, productivity, or comfort matter—ignoring wildlife, ecosystems, or other sentient entities—it exhibits human-centered bias.',
    whyItMatters: 'Decisions guided by AI (like city planning, agriculture, and environmental policy) could cause severe harm to non-humans if human benefit is the only factor considered.'
  },
  'sentience': {
    id: 'sentience',
    term: 'Sentience',
    simpleDefinition: 'The capacity to have subjective experiences, such as feeling pleasure, pain, distress, or comfort.',
    extendedExplanation: 'Sentience is what makes an individual morally matter for their own sake. Most animals (mammals, birds, and many aquatic creatures) are scientifically recognized as sentient.',
    whyItMatters: 'If a being can suffer or flourish, its welfare has ethical weight regardless of its species or form.'
  },
  'digital-minds': {
    id: 'digital-minds',
    term: 'Digital Minds',
    simpleDefinition: 'Hypothetical future computational systems or AI agents that might possess subjective experiences or consciousness.',
    extendedExplanation: 'Whether software running on silicon chips could ever be sentient is an active research question in philosophy and cognitive science. Current LLMs are not conscious, but future architectures might raise genuine ethical questions.',
    whyItMatters: 'Dismissing the possibility outright or jumping to conclusions prematurely both risk severe moral mistakes.'
  },
  'moral-status': {
    id: 'moral-status',
    term: 'Moral Status',
    simpleDefinition: 'The recognition that an entity’s well-being matters ethically in its own right, not merely as a tool or property for others.',
    extendedExplanation: 'An entity has moral status if we have a duty not to harm it for its own sake. Humans possess moral status, as do animals. Whether artificial entities could ever have moral status is heavily debated.',
    whyItMatters: 'Clarifying moral status prevents ethical blind spots in resource allocation and technological governance.'
  },
  'ai-alignment': {
    id: 'ai-alignment',
    term: 'AI Alignment',
    simpleDefinition: 'Ensuring that artificial intelligence systems reliably pursue goals and adhere to values that protect moral goods and prevent harm.',
    extendedExplanation: 'Traditionally, AI alignment focused strictly on aligning AI with human values. "Inclusive AI Alignment" expands this scope to consider all beings capable of suffering or thriving.',
    whyItMatters: 'An AI aligned only with narrow human economic desires could inadvertently harm ecosystems, wild animals, or future sentient entities.'
  },
  'species-bias': {
    id: 'species-bias',
    term: 'Species-Related Bias (Speciesism)',
    simpleDefinition: 'Assigning greater moral value or attention to one species over another without a morally relevant justification.',
    extendedExplanation: 'For example, showing deep concern for the psychological welfare of dogs while treating equally intelligent or sentient farm animals (like pigs) merely as production units.',
    whyItMatters: 'Highlighting species-related inconsistencies helps AI provide balanced, compassionate advice across different domains.'
  }
};
