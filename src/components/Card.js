export default function Card({ children }) {
    const styles = {
        backgroundColor: "grey",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "0.5rem"
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}
