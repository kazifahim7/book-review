import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../utility/ReadStorage";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Chart = () => {
    const [booksData, setBooksData] = useState([]);

    const readBooks = useLoaderData();

    useEffect(() => {
        if (Array.isArray(readBooks)) {
            const storedReadBooks = getReadBooks();
            const matchedBooks = readBooks.filter((book) => storedReadBooks.includes(book.bookId));
            setBooksData(matchedBooks);
        }
    }, [readBooks]);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="container mx-auto  flex justify-center items-center">
            <BarChart
                width={700}
                height={300}
                data={booksData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />}>
                    {booksData.map((get, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>


        </div>
    )

};
Chart.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
};
export default Chart;
