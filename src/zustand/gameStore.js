import { create } from "zustand";

const questions = [
  {
    id: 1,
    text: "Eng katta sayyora qaysi?",
    answer: "Yupiter",
    point: 20,
    isAnswered: false,
  },
  {
    id: 2,
    text: "Eng katta Qit'a?",
    answer: "Osiyo",
    point: 5,
    isAnswered: false,
  },
  {
    id: 3,
    text: "Eng baland cho'qqi?",
    answer: "Everest",
    point: 15,
    isAnswered: false,
  },
  {
    id: 4,
    text: "Everestdan oldingi eng baland cho'qqi?",
    answer: "Everest",
    point: 20,
    isAnswered: false,
  },
  // {
  //   id: 5,
  //   text: "Ikkita birni bir-biriga qo'shganda qachon bir hosil bo'ladi?",
  //   answer: "Ikki tomchi",
  //   point: 25,
  //   isAnswered: false,
  // },
  // {
  //   id: 6,
  //   text: "2+2*2?",
  //   answer: "6",
  //   point: 10,
  //   isAnswered: false,
  // },
  // {
  //   id: 7,
  //   text: "Ustozingiznig yoshi nechchida (Cyber Security)?",
  //   answer: "...",
  //   point: 25,
  //   isAnswered: false,
  // },
  // {
  //   id: 8,
  //   text: "Kuratoringizning mashinasining raqami necha?",
  //   answer: "01 V 885 QC",
  //   point: 15,
  //   isAnswered: false,
  // },
];

const teams = [
  { id: 100, name: "Team 1", score: 0 },
  { id: 21231, name: "Team 2", score: 0 },
  { id: 312312, name: "Team 3", score: 0 },
  { id: 4123123, name: "Team 4", score: 0 },
];

export const useGameStore = create((set, get) => ({
  questions,
  currentQuestion: null,
  teams: null,
  currentTeam: teams[0],
  setCurrentQuestion: (question) =>
    set((state) => ({
      currentQuestion: question,
    })),
  markAnswered: (id) =>
    set((state) => ({
      questions: state.questions.map((question) => {
        if (question.id === id) {
          return { ...question, isAnswered: true };
        }
        return question;
      }),
    })),
  changeTeam: (index) =>
    set((state) => ({
      currentTeam:
        index === state.teams.length - 1
          ? state.teams[0]
          : state.teams[index + 1],
    })),
  setPoint: (point) =>
    set((state) => ({
      currentTeam: {
        ...state.currentTeam,
        score: (state.currentTeam.score += point),
      },
    })),
  isGameOver: () => {
    return get().questions.every((q) => q.isAnswered);
  },
  getWinner: () => {
    const maxNumber = Math.max(...teams.map((t) => t.score));
    const winner = teams.filter((t) => t.score === maxNumber);
    return winner;
  },
  generateTeams: (numOfTeams) => set((state) => ({
    teams: Array.from({length: numOfTeams}, (team, index) => {
      return {
        id: index,
        name: `Team ${index + 1}`,
        score: 0
      }
    })
  }))
}));
