import { useEffect, useState } from 'react'
import { ScentData } from 'src/app/components/ScentsList/ScentsList'

const scentsSpreadsheetId = '147SKLacYJCfrNPkXsl3N6aJXgrA1SydxPRSvHaGFFak'

interface RowValues {
  v: string
}

interface SpreadSheetRow {
  c: RowValues[]
}

const fetchSpreadsheetById = async (spreadsheetId: string) => {
  return fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`)
    .then(res => res.text())
    .then(text => {
      const json = JSON.parse(text.substr(47).slice(0, -2))

      return json
    })
    .catch(err => err)
}

const cleanRow = (row: SpreadSheetRow) => {
  return row.c.map(column => column?.v)
}

const processRows = (rows: SpreadSheetRow[]) => {
  return rows.map(cleanRow)
}

const getScentData = (rows: SpreadSheetRow[]): ScentData[] => {
  const cleanedRows = processRows(rows)
  const columns = cleanedRows[0].filter(column => column?.length)

  const data = cleanedRows.map((row: string[], idx: number) => {
    const rowData: { [key: string]: string } = {}

    row.map((rowValue, idx) => {
      const columnName: string = columns[idx]
      if (columnName) rowData[columnName.replace(/\s+/g, '')] = rowValue
    })

    return rowData
  })

  data.shift()

  return data
}

const useScents = () => {
  const [scents, setScents] = useState<undefined | ScentData[]>()

  const fetchScents = async () => {
    const spreadsheet = await fetchSpreadsheetById(scentsSpreadsheetId)
    const scents = getScentData(spreadsheet.table.rows)

    setScents(scents)
  }

  useEffect(() => {
    fetchScents()
  }, [])

  return scents
}

export default useScents
