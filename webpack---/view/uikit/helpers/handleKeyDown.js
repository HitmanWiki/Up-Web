export const handleKeyDown = (key, callback) => {
    return (e) => {
        if (Array.isArray(key) ? key.includes(e.key) : key === e.key) callback ? .(e)
    }
}