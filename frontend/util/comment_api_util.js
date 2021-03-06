export const fetchComments = (soundId) => {
    return $.ajax({
        method: "GET",
        url: `/api/sounds/${soundId}/comments`,
    })
}

export const createComment = comment => {
    return $.ajax({
        url: '/api/comments',
        method: "POST",
        data: { comment }

    })
}

export const deleteComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: "DELETE"
    })
}