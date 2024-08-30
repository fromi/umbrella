export enum RuleId {
  SlideUmbrella = 1, // Picking an Umbrella and placing it in my Stage
  PlaceScoringToken, // Taking a Scoring token and placing it on my Scoreboard
  PassFigureTile, // Passing a Figure tile that match with the placed Scoring token - choose orientation in a 2 players game
  PlaceFigureTile, // Choose where to place the Figure tile when I have no free spot
  SwapUmbrellas, // Level 4 Scoreboard power: exchange the position of 2 adjacent Umbrella token on my Stage
  TradeUmbrella // Level 4 Scoreboard power: exchange an Umbrella token from a Waiting Zone around me with one on my Stage
}
