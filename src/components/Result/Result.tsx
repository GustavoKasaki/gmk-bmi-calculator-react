import "./Result.scss";

interface ResultProps {
  BMI: number | null;
  activeCategory: string | null;
}

const Result: React.FC<ResultProps> = ({ BMI, activeCategory }) => {
  console.log("Updated category to:", activeCategory);

  const categories = [
    { name: "Severe Thinness", range: "<16" },
    { name: "Moderate Thinness", range: "16 ~ 17" },
    { name: "Mild Thinness", range: "17 ~ 18,5" },
    { name: "Normal", range: "18,5 ~ 25" },
    { name: "Overweight", range: "25 ~ 30" },
    { name: "Obese Class I", range: "30 ~ 35" },
    { name: "Obese Class II", range: "35 ~ 40" },
    { name: "Obese Class III", range: ">40" },
  ];

  return (
    <>
      <div className="result">
        <h3>Your BMI is:</h3>
        <span>{BMI} kg/m²</span>
      </div>
      <div className="chart">
        <h3 className="chart__title">BMI values for adults:</h3>
        <ul className="chart__table">
          {categories.map((category) => (
            <li
              key={category.name}
              className={`chart__table__item ${
                category.name === activeCategory
                  ? "chart__table__item--isActive"
                  : ""
              }`}
            >
              <p>{category.name}</p>
              <p>({category.range})</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Result;
