import DonutChart from 'react-donut-chart';
// The following are props of DonutChart
// use color num 8, 9
const data = [
    { 'label': '', 'value': 75 }, 
    {label: '',value: 25,isEmpty: true,}
];
const colors = ['#a6faff','#2196f3', '#03a9f4', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b' ];
const emptyColor = '#e0e0e0';
const strokeColor = '#212121';
const colorFunction =  (colors, index) => colors[(index % colors.length)];
const innerRadius = 0.70;
const outerRadius = 0.90;
const selectedOffset = 0.03;
const emptyOffset = 0.08;
const toggledOffset = 0.04;
const formatValues = (values, total) => `${(values / total * 100).toFixed(2)}%`;
const onMouseEnter = (item) => item;
const onMouseLeave = (item) => item;
const onClick = (item, toggled) => (toggled ? item : null);
const clickToggle = true;
const WaterGraph = (props) => {
    return (
        <>
            <DonutChart data={data} colors={colors}
                height={250} width={250} legend={false} />
            {/* {colors.map((value, index, array) => <span style={{color:value}}>value</span>)} */}
        </>
    );
};

export default WaterGraph;