import { Lesson } from './types';

export const COURSE_TITLE = "Academia da Contratação com Excelência";
export const COURSE_SUBTITLE = "Transforme seu processo seletivo em uma vantagem competitiva estratégica.";

const LOREM_CONTENT = `
  <h3 class="text-xl font-semibold text-slate-800 mb-4">Introdução ao Tópico</h3>
  <p class="mb-4 text-slate-600 leading-relaxed">
    Nesta aula, exploraremos os fundamentos essenciais para dominar esta etapa do processo seletivo. 
    A contratação de excelência não é apenas sobre preencher vagas, mas sobre encontrar o talento que se alinha 
    perfeitamente à cultura e aos objetivos estratégicos da organização.
  </p>
  <h3 class="text-xl font-semibold text-slate-800 mb-4">Pontos Chave</h3>
  <ul class="list-disc pl-5 mb-6 text-slate-600 space-y-2">
    <li>Compreensão profunda do perfil comportamental.</li>
    <li>Análise de hard skills versus soft skills.</li>
    <li>Impacto financeiro de uma contratação errada.</li>
    <li>Ferramentas modernas para otimização do tempo.</li>
  </ul>
  <p class="mb-4 text-slate-600 leading-relaxed">
    Ao final deste módulo, você será capaz de aplicar técnicas avançadas que reduzem o turnover e aumentam 
    a satisfação dos gestores contratantes. Lembre-se: recrutar é vender a empresa para o candidato, tanto 
    quanto o candidato se vende para a empresa.
  </p>
`;

export const LESSONS: Lesson[] = [
  // Módulo 1: Fundamentos
  { id: 1, category: "Fundamentos", title: "O Novo Papel do Recrutador", description: "De executor a consultor estratégico de talentos.", duration: "10 min", content: LOREM_CONTENT },
  { id: 2, category: "Fundamentos", title: "Employer Branding", description: "Como tornar sua empresa um imã de talentos.", duration: "15 min", content: LOREM_CONTENT },
  { id: 3, category: "Fundamentos", title: "Cultura Organizacional", description: "A importância do fit cultural na seleção.", duration: "12 min", content: LOREM_CONTENT },
  { id: 4, category: "Fundamentos", title: "Diversidade e Inclusão", description: "Construindo times plurais e inovadores.", duration: "18 min", content: LOREM_CONTENT },
  { id: 5, category: "Fundamentos", title: "Métricas de Recrutamento", description: "SLA, Turnover e Time-to-Hire explicados.", duration: "20 min", content: LOREM_CONTENT },
  
  // Módulo 2: Planejamento
  { id: 6, category: "Planejamento", title: "Levantamento de Perfil", description: "Como conduzir o briefing com o gestor.", duration: "15 min", content: LOREM_CONTENT },
  { id: 7, category: "Planejamento", title: "Job Description Atrativo", description: "Escrevendo anúncios que convertem.", duration: "12 min", content: LOREM_CONTENT },
  { id: 8, category: "Planejamento", title: "Mapeamento de Competências", description: "Definindo CHA (Conhecimento, Habilidade, Atitude).", duration: "14 min", content: LOREM_CONTENT },
  { id: 9, category: "Planejamento", title: "Definição de Salários", description: "Alinhamento com o mercado e orçamento.", duration: "10 min", content: LOREM_CONTENT },
  { id: 10, category: "Planejamento", title: "Canais de Divulgação", description: "Onde encontrar o seu candidato ideal.", duration: "12 min", content: LOREM_CONTENT },

  // Módulo 3: Atração e Sourcing
  { id: 11, category: "Atração", title: "Hunting Ativo no LinkedIn", description: "Técnicas avançadas de busca booleana.", duration: "25 min", content: LOREM_CONTENT },
  { id: 12, category: "Atração", title: "Networking Estratégico", description: "Usando sua rede para encontrar talentos.", duration: "15 min", content: LOREM_CONTENT },
  { id: 13, category: "Atração", title: "Programas de Indicação", description: "Engajando colaboradores para indicar.", duration: "10 min", content: LOREM_CONTENT },
  { id: 14, category: "Atração", title: "Banco de Talentos", description: "Como manter e nutrir um pipeline ativo.", duration: "12 min", content: LOREM_CONTENT },
  { id: 15, category: "Atração", title: "Inbound Recruiting", description: "Atraindo candidatos através de conteúdo.", duration: "18 min", content: LOREM_CONTENT },

  // Módulo 4: Triagem e Avaliação
  { id: 16, category: "Seleção", title: "Triagem de Currículos Ágil", description: "Identificando os melhores perfis rapidamente.", duration: "15 min", content: LOREM_CONTENT },
  { id: 17, category: "Seleção", title: "Entrevista por Competências", description: "A técnica STAR na prática.", duration: "22 min", content: LOREM_CONTENT },
  { id: 18, category: "Seleção", title: "Testes Comportamentais", description: "DISC, MBTI e outras ferramentas.", duration: "20 min", content: LOREM_CONTENT },
  { id: 19, category: "Seleção", title: "Testes Técnicos e Cases", description: "Avaliando a entrega real do candidato.", duration: "15 min", content: LOREM_CONTENT },
  { id: 20, category: "Seleção", title: "Leitura de Linguagem Corporal", description: "O que não é dito na entrevista.", duration: "12 min", content: LOREM_CONTENT },

  // Módulo 5: Decisão e Fechamento
  { id: 21, category: "Fechamento", title: "Checagem de Referências", description: "Como validar o histórico profissional.", duration: "10 min", content: LOREM_CONTENT },
  { id: 22, category: "Fechamento", title: "Negociação Salarial", description: "Fechando a proposta com sucesso.", duration: "15 min", content: LOREM_CONTENT },
  { id: 23, category: "Fechamento", title: "Feedback aos Candidatos", description: "A importância do retorno negativo construtivo.", duration: "12 min", content: LOREM_CONTENT },
  { id: 24, category: "Fechamento", title: "A Tomada de Decisão", description: "Apoiando o gestor na escolha final.", duration: "10 min", content: LOREM_CONTENT },
  { id: 25, category: "Fechamento", title: "A Proposta Formal", description: "Elementos jurídicos e contratuais básicos.", duration: "10 min", content: LOREM_CONTENT },

  // Módulo 6: Onboarding e Retenção
  { id: 26, category: "Pós-Contratação", title: "Pré-Onboarding", description: "Mantendo o engajamento até o dia 1.", duration: "10 min", content: LOREM_CONTENT },
  { id: 27, category: "Pós-Contratação", title: "O Primeiro Dia", description: "Criando uma experiência memorável.", duration: "12 min", content: LOREM_CONTENT },
  { id: 28, category: "Pós-Contratação", title: "Acompanhamento de 90 Dias", description: "Garantindo a adaptação no período de experiência.", duration: "15 min", content: LOREM_CONTENT },
  { id: 29, category: "Pós-Contratação", title: "Entrevista de Desligamento", description: "Aprendendo com quem sai.", duration: "15 min", content: LOREM_CONTENT },
  { id: 30, category: "Pós-Contratação", title: "Melhoria Contínua", description: "O ciclo PDCA no Recrutamento e Seleção.", duration: "12 min", content: LOREM_CONTENT },
];