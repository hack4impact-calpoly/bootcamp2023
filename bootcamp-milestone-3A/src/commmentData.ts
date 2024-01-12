type IComment = {
  [x: string]: Key | null | undefined;
  user: string;
  comment: string;
  time: Date;
}

export default IComment; 