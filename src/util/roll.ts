export const roll = (rank: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (rank === 0) {
        return Math.min(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20))
    }
    return Math.floor(Math.random() * 20) + 1 + Math.floor(Math.random() * (4 + ((rank - 1) * 2))) + 1
}