import json from "../parser";
import read from "../reader";

test('parser.js', async() => {
    const data = await read();
    const result = await json(data);

    const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

    expect(result).toEqual(expected);
})