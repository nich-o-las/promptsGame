const defaultGameInfo = {}

export default function gameInfoReducer(gameInfo = defaultGameInfo, action) {
  switch (action.type) {
    case 'gameInfo':
      return gameInfo = action.payload;
    default:
      return gameInfo;
  }
} 