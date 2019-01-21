import React from 'react';
// import Pager from 'components/ui/pager';

const PaginationComponent = (props) => {
    const {total, offset, limit} = this.props.pagination;
    const current = offset / limit;

    return (
        {/*<Pager total={total} current={current} />*/}
    )
};

export default PaginationComponent;