import {createUseStyles} from 'react-jss'
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  statistics: {
    maxWidth: 500,
    margin: [150, 'auto'],
    padding: [30, 15],
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
  },
  title: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    margin: 0,
    padding: [30, 0],
    border: '1px solid #ccc',
    color: '#ccc'
  },
  'stat-list': {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  item: {
    minWidth: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: [15, 15]
    },
  text: {
    width: 40,
    height: 40,
    fontFamily: 'sans-serif',
    backgroundColor: '#fff',
    color: '#999999',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: '50%'
  }
})

const Statistics = ({ stats, title }) => {
  const s = useStyles()

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
