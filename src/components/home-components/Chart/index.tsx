import {PieChart, Pie, Cell, Legend} from 'recharts';
import theme from "../../../styles/theme.ts";

const COLORS: string[] = [
    theme.colors.accentTwo,
    theme.colors.accentOne
]

const Chart = (active: number, all: number, statuses: string[]) => {

    const data = [
        { name: statuses[0], value: active },
        { name: statuses[1], value: all - active }
    ];

    return (
        <div>
            <PieChart width={250} height={150} style={{width: '100%'}}>
                <Pie
                    data={data}
                    cx={70}
                    cy={70}
                    innerRadius={45}
                    outerRadius={60}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                    stroke="none"
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend layout="vertical" verticalAlign="middle" align="right"
                        formatter={(value) => <span style={{
                            color: theme.colors.textSecondary, fontSize: '15px'}}>{value}</span>} />
                <text
                    x='50%'
                    y='50%'
                    dy={+8}
                    dx={-49}
                    style={{ fontSize: 20, fill: theme.colors.textSecondary }}
                    width={100}
                    textAnchor='middle'
                >
                    {(active / all * 100).toFixed(0)}%
                </text>
            </PieChart>
        </div>
    )
}

export default Chart