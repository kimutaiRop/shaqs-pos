const formatAmount = (amount: number) => {
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "KES",
    });
};

export { formatAmount}
