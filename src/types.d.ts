declare module 'http' {
  export interface Server {
    lastPlayerID: number;
  }
}

interface Player {
  id: number;
  x: number;
  y: number;
}

declare namespace SocketIO {
  interface Socket {
    player?: Player;
  }
}
