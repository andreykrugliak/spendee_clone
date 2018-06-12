import React from 'react'
import { LineChart, XAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'

class BarChartComponent extends React.PureComponent {
  render () {
    return (
      <View style={{ height: 200, padding: 20 }}>
        <LineChart
          style={{ flex: 1 }}
          data={this.props.data}
          yAccessor={({ item }) => item.expense ? -item.data : item.data }
          xAccessor={({ item }) => new Date(item.date) }
          gridMin={0}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
        >
          <Grid/>
        </LineChart>
        <XAxis
          style={{ flex: 0.1 }}
          data={this.props.data}
          formatLabel={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          contentInset={{ left: 5, right: 15 }}
          xAccessor={({ item }) => new Date(item.date)}
          svg={{
            fontSize: 10
          }}
          min={0}
          numberOfTicks={6}
        />
      </View>
    )
  }
}

export default BarChartComponent
