module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },

    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    },

    is_my_page: (pageUser, userId) => {
        return pageUser == userId;
    },
    compare: (one, comparator, two) => {
        if(eval("'" + one + "'" + comparator + "'" + two + "'")) {
            return true;
        } else {
            return false;
        }
    },

    format_initials: (first, last) => {
        return first[0] + '.' + last[0] + '.';
    },

    concat_names: (arr) => {
        let str = [];
        for (let i=0; i<arr.length; i++) {
            console.log(arr[i]);
            str.push(arr[i].firstname + " " + arr[i].lastname);
        }
        return str.join(", ");
    }
};