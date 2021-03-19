import PropTypes from "prop-types";
import * as s from "./StatisticsFunc.module.css";

const StatisticsFunc = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s["stat-list"]}>
        {stats.map((stats) => {
          return (
            <li
              style={{ backgroundColor: `#${createRandomColor}` }}
              key={stats.id}
              className={s.item}
            >
              <div className={s.text}>
                <span className={s.label}>{stats.label}</span>
                <span className={s.percentage}>{`${stats.percentage}%`}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const createRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

StatisticsFunc.defaultProps = {
  friends: [],
};

StatisticsFunc.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default StatisticsFunc;
