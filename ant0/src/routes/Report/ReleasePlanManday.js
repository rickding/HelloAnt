import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form } from 'antd';
import ManDayTable from '../../components/ManDayTable';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './ReleasePlanManday.less';

const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

@connect(({ report, loading }) => ({
  report,
  loading: loading.models.report,
}))
@Form.create()
export default class ReleasePlanManday extends PureComponent {
  state = {
    selectedRows: [],
    formValues: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'report/fetchReleasePlanManday',
    });
  }

  handleTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'report/fetchReleasePlanManday',
      payload: params,
    });
  }

  handleSelectRows = (rows) => {
    this.setState({
      selectedRows: rows,
    });
  }

  render() {
    const { report: { data }, loading } = this.props;
    const { selectedRows } = this.state;

    return (
      <PageHeaderLayout title="未完成开发-人力库存">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <ManDayTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleTableChange}
            />
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}
