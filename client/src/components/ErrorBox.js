const ErrorBox = ({error}) => {
    return (
    <div data-testid="error-box" className="error-box">
      {(error === "content") ? 
        (<div>
            Allowed queries: characters and spaces up to 30 symbols in total
        </div>) :
        (<div>
            No results found for '{error}'
        </div>)
        }
    </div>
    )   
};

export default ErrorBox;