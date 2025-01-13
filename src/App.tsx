import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
// 로그인
import Login from '@/views/login/index';
// 홈
import Home from '@/views/home/index';
// inputs
import AutoComplete from '@/views/inputs/autoComplete/index';
import Button from '@/views/inputs/button/index';
import ButtonGroup from '@/views/inputs/buttonGroup/index';
import Inputs from '@/views/inputs/inputs/index';
import QuantityInputs from '@/views/inputs/quantityInputs/index';
import Radio from '@/views/inputs/radio/index';
import RadioGroup from '@/views/inputs/radioGroup/index';
import Selects from '@/views/inputs/selects/index';
import TextArea from '@/views/inputs/textArea/index';
import Toggles from '@/views/inputs/toggles/index';
import Tabs from '@/views/inputs/tabs/index';
import Form from '@/views/inputs/form/index';
// Data Display
import Avatar from '@/views/dataDisplay/avatar/index';
import Badge from '@/views/dataDisplay/badge/index';
import Cards from '@/views/dataDisplay/cards/index';
import Chip from '@/views/dataDisplay/chip/index';
import Divider from '@/views/dataDisplay/divider/index';
import Lists from '@/views/dataDisplay/lists/index';
import Popover from '@/views/dataDisplay/popover/index';
import Table from '@/views/dataDisplay/table/index';
import Tooltip from '@/views/dataDisplay/tooltip/index';
import Accordion from './views/dataDisplay/accordion';
// feedback
import Alert from '@/views/feedback/alert/index';
import Modal from '@/views/feedback/modal/index';
import Progress from '@/views/feedback/progress/index';
// layout
import Flex from '@/views/layout/flex/index';
import Grid from '@/views/layout/grid/index';
import FlexGridSample from '@/views/layout/sample/index';
// chart
import BarChart from '@/views/chart/barChart/index';
import BubbleChart from '@/views/chart/bubbleChart/index';
import DoughnutChart from '@/views/chart/doughnutChart/index';
import LineChart from '@/views/chart/lineChart/index';
import PieChart from '@/views/chart/pieChart/index';
import PolarAreaChart from '@/views/chart/polarAreaChart/index';
import RadarChart from '@/views/chart/radarChart/index';
import ScatterChart from '@/views/chart/scatterChart/index';
import ChartSample from '@/views/chart/sample/index';
import ChartSample02 from '@/views/chart/sample2/index';
import ChartSample03 from '@/views/chart/sample3/index';
import ChartSample04 from '@/views/chart/sample4/index';
import ChartSample05 from '@/views/chart/sample5/index';
// tables
import ReactTable from '@/views/tables/reactTable/index';
import AgGrid from '@/views/tables/agGrid/index';
import Griddle from '@/views/tables/griddle/index';
// colorchip
import ColorChip from '@/views/colorChip/index';
// icons
import Icons from '@/views/icons/index';
// breakpoints
import BreakPoint from '@/views/breakPoint/index';
import NotFoundPage from '@/views/error/index';
// KAKAO Address UI Test
import KakaoAddress from '@/views/test/kakao/index';
// openAI serviceDemo
import Playground from '@/views/openAI/playground';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" caseSensitive={true} element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFoundPage />} />
        {/* 홈 */}
        <Route element={<Layout />}>
          <Route path="/home/index" element={<Home />} />
          {/* inputs */}
          <Route path="/inputs/autoComplete" element={<AutoComplete />} />
          <Route path="/inputs/button" element={<Button />} />
          <Route path="/inputs/buttonGroup" element={<ButtonGroup />} />
          <Route path="/inputs/inputs" element={<Inputs />} />
          <Route path="/inputs/quantityInputs" element={<QuantityInputs />} />
          <Route path="/inputs/radio" element={<Radio />} />
          <Route path="/inputs/radioGroup" element={<RadioGroup />} />
          <Route path="/inputs/selects" element={<Selects />} />
          <Route path="/inputs/textArea" element={<TextArea />} />
          <Route path="/inputs/toggles" element={<Toggles />} />
          <Route path="/inputs/tabs" element={<Tabs />} />
          <Route path="/inputs/form" element={<Form />} />
          {/* Data Display */}
          <Route path="/dataDisplay/avatar" element={<Avatar />} />
          <Route path="/dataDisplay/badge" element={<Badge />} />
          <Route path="/dataDisplay/cards" element={<Cards />} />
          <Route path="/dataDisplay/chip" element={<Chip />} />
          <Route path="/dataDisplay/divider" element={<Divider />} />
          <Route path="/dataDisplay/lists" element={<Lists />} />
          <Route path="/dataDisplay/popover" element={<Popover />} />
          <Route path="/dataDisplay/table" element={<Table />} />
          <Route path="/dataDisplay/tooltip" element={<Tooltip />} />
          <Route path="/dataDisplay/accordion" element={<Accordion />} />
          {/* feedback */}
          <Route path="/feedBack/alert" element={<Alert />} />
          <Route path="/feedBack/modal" element={<Modal />} />
          <Route path="/feedBack/progress" element={<Progress />} />
          {/* layout */}
          <Route path="/layout/flex" element={<Flex />} />
          <Route path="/layout/grid" element={<Grid />} />
          <Route path="/layout/flexgridSample" element={<FlexGridSample />} />
          {/* chart */}
          <Route path="/chart/barChart" element={<BarChart />} />
          <Route path="/chart/doughnutChart" element={<DoughnutChart />} />
          <Route path="/chart/bubbleChart" element={<BubbleChart />} />
          <Route path="/chart/lineChart" element={<LineChart />} />
          <Route path="/chart/pieChart" element={<PieChart />} />
          <Route path="/chart/polarAreaChart" element={<PolarAreaChart />} />
          <Route path="/chart/radarChart" element={<RadarChart />} />
          <Route path="/chart/scatterChart" element={<ScatterChart />} />
          <Route path="/chart/chartSample" element={<ChartSample />} />
          <Route path="/chart/chartSample02" element={<ChartSample02 />} />
          <Route path="/chart/chartSample03" element={<ChartSample03 />} />
          <Route path="/chart/chartSample04" element={<ChartSample04 />} />
          <Route path="/chart/chartSample05" element={<ChartSample05 />} />
          {/* React tables 임시 */}
          <Route path="/tables/reactTable" element={<ReactTable />} />
          <Route path="/tables/agGrid" element={<AgGrid />} />
          <Route path="/tables/griddle" element={<Griddle />} />
          {/* ColorChip */}
          <Route path="/colorchip" element={<ColorChip />} />
          {/* icons */}
          <Route path="/icons" element={<Icons />} />
          {/* breakPoint */}
          <Route path="/breakPoint" element={<BreakPoint />} />
          {/* openAI */}
          <Route path="/openAI/playground" element={<Playground />} />
        </Route>
        {/* kakao 주소 테스트 */}
        <Route path="/kakaoAddress" element={<KakaoAddress />} />
      </Routes>
    </>
  );
}

export default App;
