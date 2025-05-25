export default ({ selectedFilters }) => {
    const fieldLabels = {
        brand: "Hãng",
        ram: "RAM",
        storage: "Bộ nhớ",
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            {Object.entries(selectedFilters)
                .filter(([, values]) => values.length > 0)
                .map(([field, values]) => (
                    <div key={field} style={{ display: "flex", gap: "0.5rem" }}>
                        <span style={{ fontWeight: "bold" }}>{fieldLabels[field] || field}:</span>
                        <span>{values.join(", ")}</span>
                    </div>
                ))}
        </div>
    );
};
