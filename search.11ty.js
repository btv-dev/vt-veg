class Test {
    data() {
        return {
            permalink: "/search.json"
        };
    }

    render(data) {

        let rests = data.collections.restaurants;

        let obj = rests.map(r => {

            let rest = {
                url: r.url,
                name: r.data.name,
                summary: r.data.summary
            }

            return rest
        })

        let output = JSON.stringify(obj, 2, 2)

        return output

    }
}

module.exports = Test;