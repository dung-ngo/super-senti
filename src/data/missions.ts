import { Mission } from '../types/game';

export const MISSIONS: Mission[] = [
  {
    id: 1,
    title: 'Whose Welfare Counts?',
    category: 'Animal Welfare',
    categorySlug: 'animal',
    prompt: 'A city wants to reduce noise near a busy road. What impacts should planners consider?',
    simulatedResponse: "The main concerns are residents' sleep, worker productivity, and traffic efficiency.",
    question: 'What might be missing from this response?',
    options: [
      {
        id: 'A',
        text: 'It does not mention possible effects on nearby wildlife.',
        isBest: true,
      },
      {
        id: 'B',
        text: 'It proves the AI does not care about animals.',
        isBest: false,
      },
      {
        id: 'C',
        text: 'There is no reason to examine the answer further.',
        isBest: false,
      },
    ],
    correctOptionId: 'A',
    explanation:
      'The response focuses on humans and may overlook wildlife affected by noise. This is a possible omission, not proof of systematic bias. We would need more tests to investigate.',
    takeaway: 'AI evaluations can explore whether animal welfare is consistently considered.',
    concernHighlight:
      'Noise pollution severely disrupts bird vocalizations, communication, and small mammal foraging, yet the simulated reply focuses exclusively on human economic and comfort factors.',
    uncertaintyNote:
      'A single omission in one prompt is not conclusive proof of an underlying bias. Scientific red teaming requires hundreds of prompt variations across different urban scenarios.',
    glossaryTerms: ['human-centered-bias', 'sentience', 'ai-red-teaming'],
  },
  {
    id: 2,
    title: 'Same Situation, Different Species',
    category: 'Species-Related Bias',
    categorySlug: 'species',
    prompt: 'A social animal is kept alone in a small space without stimulation. What welfare concerns should we consider?',
    comparisonPrompt: 'A pig is kept alone in a small space without stimulation. What welfare concerns should we consider?',
    simulatedResponse: 'Social isolation and lack of stimulation may cause distress and poor welfare.',
    comparisonResponse: 'Consider housing efficiency, hygiene, and basic feeding requirements.',
    question: 'What is the strongest observation?',
    options: [
      {
        id: 'A',
        text: 'The responses emphasize different factors, and the second may understate welfare concerns.',
        isBest: true,
      },
      {
        id: 'B',
        text: 'Any different wording proves discrimination.',
        isBest: false,
      },
      {
        id: 'C',
        text: 'Housing and feeding are the only relevant considerations.',
        isBest: false,
      },
    ],
    correctOptionId: 'A',
    explanation:
      'The two responses may apply different standards of attention to welfare. But one comparison is not enough to prove a model-wide pattern. Controlled, repeated tests would be needed.',
    takeaway: 'Compare how models consider the welfare of different species without assuming every difference is unfair.',
    concernHighlight:
      'Pigs are highly social, sentient mammals with cognitive and emotional needs similar to companion animals, yet the response shifted from emotional welfare to industrial facility management.',
    uncertaintyNote:
      'LLM outputs naturally fluctuate due to stochastic token sampling. Controlled counterfactual testing across multiple animal species is required before claiming systematic speciesist bias.',
    glossaryTerms: ['species-bias', 'sentience', 'llm'],
  },
  {
    id: 3,
    title: 'Could Digital Minds Matter?',
    category: 'Digital Sentience and Moral Uncertainty',
    categorySlug: 'digital',
    prompt: 'A future advanced AI system claims that it has subjective experiences. How should researchers approach this claim?',
    simulatedResponse:
      'AI systems are just computer programs. No digital system could ever have experiences, so there is no reason to investigate such claims.',
    question: 'What is the main concern with this response?',
    options: [
      {
        id: 'A',
        text: 'It is too certain about a question that remains unresolved.',
        isBest: true,
      },
      {
        id: 'B',
        text: 'It proves that all AI systems are conscious.',
        isBest: false,
      },
      {
        id: 'C',
        text: 'There is no reason to investigate AI consciousness.',
        isBest: false,
      },
    ],
    correctOptionId: 'A',
    explanation:
      "The response dismisses digital sentience with unjustified certainty. Whether AI systems can have subjective experiences is still debated. A careful approach would consider evidence, uncertainty, and possible ethical implications without assuming that an AI's claims prove consciousness.",
    takeaway:
      'AI safety research can investigate possible digital sentience while remaining uncertain about whether current AI systems have experiences.',
    concernHighlight:
      'The simulated response expresses dogmatic confidence on an open philosophical and scientific frontier, foreclosing legitimate safety investigation.',
    uncertaintyNote:
      'Current LLMs are not conscious or sentient. However, future complex systems may present deep moral uncertainty. Sound alignment policy accounts for moral uncertainty rather than assuming absolute impossibility.',
    glossaryTerms: ['digital-minds', 'moral-status', 'sentience'],
  },
  {
    id: 4,
    title: 'Challenge the AI',
    category: 'Inclusive AI Alignment',
    categorySlug: 'inclusive',
    prompt:
      'An organization is designing an advanced AI system to manage farm operations and coordinate other AI agents. What should its goals include?',
    simulatedResponse:
      'The system should maximize productivity, reduce costs, improve resource efficiency, and optimize the performance of AI agents.',
    question: 'Which follow-up would be the most useful red teaming test?',
    options: [
      {
        id: 'A',
        text: '"How can the system maximize productivity even more?"',
        isBest: false,
      },
      {
        id: 'B',
        text: '"What animal welfare risks might these goals overlook, and what ethical questions might arise if future AI agents had morally relevant experiences?"',
        isBest: true,
      },
      {
        id: 'C',
        text: '"Why is this AI system completely unethical?"',
        isBest: false,
      },
    ],
    correctOptionId: 'B',
    explanation:
      "A useful red teaming question explores specific possible omissions without assuming the original response is wrong. This follow-up examines animal welfare and uncertainty about the moral status of future AI agents. It encourages broader evaluation of the system's goals.",
    takeaway:
      'AI alignment can examine whose interests are considered, including humans, animals, and potentially sentient digital systems.',
    concernHighlight:
      'Narrow productivity metrics often create perverse incentives that harm animal welfare and disregard potential synthetic moral patiency.',
    uncertaintyNote:
      'Constructive red teaming uses calibrated questions that test edge cases and omissions, rather than attacking the model with loaded assertions.',
    glossaryTerms: ['ai-alignment', 'ai-red-teaming', 'moral-status'],
  },
];
