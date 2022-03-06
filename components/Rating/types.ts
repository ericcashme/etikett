type CommentInfos = {
  datepublish: string
  stars: number
  content: string
  author: string
}

export type RatingWithCommentProps = {
  commentInfos: CommentInfos
}

export type RatingStarProps = {
  stars: number
  filled: number
}
