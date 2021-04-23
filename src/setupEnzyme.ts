import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// tslint:disable-next-line:no-any
(Enzyme as any).configure({ adapter: new Adapter() });