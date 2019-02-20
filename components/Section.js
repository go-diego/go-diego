export default function Section(props) {
    const {children, className} = props;
    return (
        <section className={`section ${className || ""}`}>
            <div className="container">{children}</div>
        </section>
    );
}
