import PropTypes from "prop-types";
import * as s from "./Statistics.module.css";

const Statistics = ({ stats, title }) => {
  const createRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  return (
    <div className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s["stat-list"]}>
        {stats.map((stats) => {
          return (
            <li
              style={{ backgroundColor: `#${createRandomColor()}` }}
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
    </div>
  );
};

Statistics.defaultProps = {
  friends: [],
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default Statistics;
