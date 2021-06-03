import moment from 'moment';

const formatCurrency = (value) => {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('id-ID');
    return formatter.format(value);
};

const formatDate = (dateString) => {
    return moment(dateString).format('YYYY-MM-DD HH:mm:ss');
}

export default {
    formatCurrency,
    formatDate
};