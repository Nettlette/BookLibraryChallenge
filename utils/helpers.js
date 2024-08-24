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
    }
};