import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="md:container mx-auto  justify-center flex">
            <div className="text-4xl font-extrabold mt-36">
                <h1 className="text-center">Oops!</h1>
                <p className="text-center">Sorry, an unexpected error has occurred.</p>
                <p className="text-center">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}