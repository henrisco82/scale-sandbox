import React from 'react'
import { ScaleTable } from '@telekom/scale-components-react'

const OverviewTable = (props) => {
  const { rows } = props
  return (
    <ScaleTable size='small'>
        <table>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.title}>
                        <td><b>{row.title}</b></td>
                        <td align='right'>{row.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </ScaleTable>
  )
}

export default OverviewTable