export function LoadingSpinner({ label }) {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <p>{label || 'Loading...'}</p>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}