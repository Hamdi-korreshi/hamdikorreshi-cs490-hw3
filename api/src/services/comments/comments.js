import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const comments = () => {
  return db.comment.findMany()
}

export const comment = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const Comment = {
  post: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).post()
  },
}

export const createComment = ({ input }) => {
  return db.comment.create({
    data: input,
  })
}

export const deleteComment = ({ id }) => {
  requireAuth({ roles: 'moderator' })
  return db.comment.delete({
    where: { id },
  })
}