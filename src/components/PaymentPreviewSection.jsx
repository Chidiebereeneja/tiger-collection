
export const PaymentSection = function({iconUrl, str}) {
    return (
        <p className="flex items-center gap-2">
            {iconUrl}
            <span>{str}</span>
        </p>
    )
}
