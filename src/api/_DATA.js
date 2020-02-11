let users = {
  geneviemcpeak: {
    id: 'geneviemcpeak',
    name: 'Genevie Mcpeak',
    avatarURL: '/avatar/geneviemcpeak.png',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      'am8ehyc8byjqgar0jgpub9': 'optionTwo',
      'loxhs1bqm25b708cmbf3g': 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  wardkildow: {
    id: 'wardkildow',
    name: 'Ward Kildow',
    avatarURL: '/avatar/wardkildow.png',
    answers: {
      'vthrdm985a262al8qx3do': 'optionOne',
      'xj352vofupe1dqz9emx13r': 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  rayfordstreet: {
    id: 'rayfordstreet',
    name: 'Rayford Street',
    avatarURL: '/avatar/rayfordstreet.png',
    answers: {
      'xj352vofupe1dqz9emx13r': 'optionOne',
      'vthrdm985a262al8qx3do': 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  },
  louschwartz: {
    id: 'louschwartz',
    name: 'Lou Schwartz',
    avatarURL: '/avatar/louschwartz.png',
    answers: {},
    questions: []
  },
  carlineaden: {
    id: 'carlineaden',
    name: 'Carline Aden',
    avatarURL: '/avatar/carlineaden.png',
    answers: {},
    questions: []
  },
  johnnyschlicher: {
    id: 'johnnyschlicher',
    name: 'Johnny Schlicher',
    avatarURL: '/avatar/johnnyschlicher.png',
    answers: {},
    questions: []
  },
  ammiekittel: {
    id: 'ammiekittel',
    name: 'Ammie Kittel',
    avatarURL: '/avatar/ammiekittel.png',
    answers: {},
    questions: []
  },
  lucretialasky: {
    id: 'lucretialasky',
    name: 'Lucretia Lasky',
    avatarURL: '/avatar/lucretialasky.png',
    answers: {},
    questions: []
  },
  brandensilber: {
    id: 'brandensilber',
    name: 'Branden Silber',
    avatarURL: '/avatar/brandensilber.png',
    answers: {},
    questions: []
  },
  latanyahavener: {
    id: 'latanyahavener',
    name: 'Latanya Havener',
    avatarURL: '/avatar/latanyahavener.png',
    answers: {},
    questions: []
  },
  columbuscallas: {
    id: 'columbuscallas',
    name: 'Columbus Callas',
    avatarURL: '/avatar/columbuscallas.png',
    answers: {},
    questions: []
  },
  raneecrumpton: {
    id: 'raneecrumpton',
    name: 'Ranee Crumpton',
    avatarURL: '/avatar/raneecrumpton.png',
    answers: {},
    questions: []
  }
}

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'geneviemcpeak',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['geneviemcpeak'],
      text: 'have horrible short term memory'
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'rayfordstreet',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero'
    },
    optionTwo: {
      votes: ['rayfordstreet', 'geneviemcpeak'],
      text: 'become a supervillain'
    }
  },
  'am8ehyc8byjqgar0jgpub9': {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'geneviemcpeak',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic'
    },
    optionTwo: {
      votes: ['geneviemcpeak'],
      text: 'be telepathic'
    }
  },
  'loxhs1bqm25b708cmbf3g': {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'wardkildow',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['geneviemcpeak'],
      text: 'be a back-end developer'
    }
  },
  'vthrdm985a262al8qx3do': {
    id: 'vthrdm985a262al8qx3do',
    author: 'wardkildow',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['wardkildow'],
      text: 'find $50 yourself'
    },
    optionTwo: {
      votes: ['rayfordstreet'],
      text: 'have your best friend find $500'
    }
  },
  'xj352vofupe1dqz9emx13r': {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'rayfordstreet',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['rayfordstreet'],
      text: 'write JavaScript'
    },
    optionTwo: {
      votes: ['wardkildow'],
      text: 'write Swift'
    }
  }
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000);
  });
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000);
  });
}

function formatQuestion ({optionOneText, optionTwoText, author}) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  };
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer ({authedUser, qid, answer}) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      };

      res();
    }, 500);
  });
}
