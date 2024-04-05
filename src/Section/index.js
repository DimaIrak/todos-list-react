import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <heder className="section__header">
      <h2 className="section__title">{title}</h2>
      {extraHeaderContent}
    </heder>
    <div className="section__body">
      {body}
    </div>
  </section>
);

export default Section;