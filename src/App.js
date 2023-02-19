import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Area from './Component/BigComponent/Area';
import Currancy from './Component/BigComponent/Currancy';
import Length from './Component/BigComponent/Length';
import Pressure from './Component/BigComponent/Pressure';
import Volume from './Component/BigComponent/Volume';
import Weight from './Component/BigComponent/Weight';
import Home from './Pages/Home/Home';
import AcresTosf from './Component/Small Component/AreaConvert/AcresTosf';
import HectorToacre from './Component/Small Component/AreaConvert/hectorToacre';
import AcresTosqmiles from './Component/Small Component/AreaConvert/AcresTosqmiles';
import SqfeetTosqyard from './Component/Small Component/AreaConvert/sqfeetTosqyard';
import SqmTosqf from './Component/Small Component/AreaConvert/sqmTosqf';
import AudTousd from './Component/Small Component/CurrancyConvert/audTousd';
import BrlTousd from './Component/Small Component/CurrancyConvert/brlTousd';
import CadTousd from './Component/Small Component/CurrancyConvert/cadTousd';
import ChfTousd from './Component/Small Component/CurrancyConvert/chfTousd';
import CnyTousd from './Component/Small Component/CurrancyConvert/cnyTousd';
import EurTousd from './Component/Small Component/CurrancyConvert/EurTousd';
import GbpTousd from './Component/Small Component/CurrancyConvert/gbpTousd';
import InrTousd from './Component/Small Component/CurrancyConvert/inrTousd';
import JpyTousd from './Component/Small Component/CurrancyConvert/jpyTousd';
import MxnTousd from './Component/Small Component/CurrancyConvert/mxnTousd';
import CentiToInch from './Component/Small Component/LengthhConvert/CentiToInch';
import CmTofoot from './Component/Small Component/LengthhConvert/cmTofoot';
import FeetToyard from './Component/Small Component/LengthhConvert/feetToyard';
import InchTofeet from './Component/Small Component/LengthhConvert/InchTofeet';
import InchTometer from './Component/Small Component/LengthhConvert/inchTometer';
import InchTomm from './Component/Small Component/LengthhConvert/InchTomm';
import KmTom from './Component/Small Component/LengthhConvert/kmTom';
import KmTomile from './Component/Small Component/LengthhConvert/kmTomile';
import MeterToyard from './Component/Small Component/LengthhConvert/meterToyard';
import MeterTofeet from './Component/Small Component/LengthhConvert/MeterTofeet';
import BarTopsi from "./Component/Small Component/PressureConvert/BarTopsi"
import KilopascalTopsi from './Component/Small Component/PressureConvert/KilopascalTopsi';
import CubicfeetTogallon from './Component/Small Component/VolumeConvert/cubicfeetTogallon';
import GallonToml from './Component/Small Component/VolumeConvert/gallonToml';
import LitTogallon from './Component/Small Component/VolumeConvert/litTogallon';
import MlTocups from './Component/Small Component/VolumeConvert/mlTocups';
import MlTolitre from './Component/Small Component/VolumeConvert/mlTolitre';
import TablespoonTocups from './Component/Small Component/VolumeConvert/tablespoonTocups';
import GmTokg from './Component/Small Component/WeightConvert/gmTokg';
import GmTomiligm from './Component/Small Component/WeightConvert/gmTomiligm';
import GmTopound from './Component/Small Component/WeightConvert/gmTopound';
import KgTolbs from './Component/Small Component/WeightConvert/kgTolbs';
import ToneTolbs from './Component/Small Component/WeightConvert/toneTolbs';
import StoneTolbs from './Component/Small Component/WeightConvert/stoneTolbs';

function App() {

  return (
    <div>
   <BrowserRouter>
<Routes>
    
      <Route path='/' element={<Home />}/>
        <Route path='/Area' element={<Area />}/>
        <Route path='/Currancy' element={<Currancy />}/>
        <Route path='/Length' element={<Length />}/>
        <Route path='/Pressure' element={<Pressure />}/>
        <Route path='/Volume' element={<Volume />}/>
        <Route path='/Weight' element={<Weight />}/>
        <Route path='/AcresTosf' element={<AcresTosf />}/>
        <Route path='/AcresTosqmiles' element={<AcresTosqmiles />}/>
        <Route path='/HectorToacre' element={<HectorToacre />}/>
        <Route path='/SqfeetTosqyard' element={<SqfeetTosqyard />}/>
        <Route path='/SqmTosqf' element={<SqmTosqf />}/>
        <Route path='/AudTousd' element={<AudTousd />}/>
        <Route path='/BrlTousd' element={<BrlTousd />}/>
        <Route path='/CadTousd' element={<CadTousd />}/>
        <Route path='/ChfTousd' element={<ChfTousd />}/>
        <Route path='/CnyTousd' element={<CnyTousd />}/>
        <Route path='/EurTousd' element={<EurTousd />}/>
        <Route path='/GbpTousd' element={<GbpTousd />}/>
        <Route path='/InrTousd' element={<InrTousd />}/>
        <Route path='/JpyTousd' element={<JpyTousd />}/>
        <Route path='/MxnTousd' element={<MxnTousd />}/>
        <Route path='/CentiToInch' element={<CentiToInch />}/>
        <Route path='/CmTofoot' element={<CmTofoot />}/>
        <Route path='/FeetToyard' element={<FeetToyard />}/>
        <Route path='/InchTofeet' element={<InchTofeet />}/>
        <Route path='/InchTometer' element={<InchTometer />}/>
        <Route path='/InchTomm' element={<InchTomm />}/>
        <Route path='/KmTom' element={<KmTom />}/>
        <Route path='/KmTomile' element={<KmTomile />}/>
        <Route path='/MeterToyard' element={<MeterToyard />}/>
        <Route path='/MeterTofeet' element={<MeterTofeet />}/>
        <Route path='/BarTopsi' element={<BarTopsi />}/>
        <Route path='/KilopascalTopsi' element={<KilopascalTopsi />}/>
        <Route path='/CubicfeetTogallon' element={<CubicfeetTogallon /> }/>
        <Route path='/GallonToml' element={<GallonToml />}/>
        <Route path='/LitTogallon' element={<LitTogallon />}/>
        <Route path='/MlTocups' element={<MlTocups />}/>
        <Route path='/MlTolitre' element={<MlTolitre />}/>
        <Route path='/TablespoonTocups' element={<TablespoonTocups />}/>
        <Route path='/GmTokg' element={<GmTokg />}/>
        <Route path='/GmTomiligm' element={<GmTomiligm />}/>
        <Route path='/GmTopound' element={<GmTopound />}/>
        <Route path='/KgTolbs' element={<KgTolbs />}/>
        <Route path='/ToneTolbs' element={<ToneTolbs />}/>
        <Route path='/StoneTolbs' element={<StoneTolbs />}/>

</Routes>
</BrowserRouter>
   
    </div>
  );
}

export default App;
