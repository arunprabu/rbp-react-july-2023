import CompanyInfo from './CompanyInfo/CompanyInfo';
import Counter from './Counter/Counter';

const UnitTestingDemoPage = () => {
  return (
    <div>
      <h1>Unit Testing Examples!</h1>

      <CompanyInfo companyName="Cognizant" />
      <hr/>

      <Counter />
    </div>
  );
}

export default UnitTestingDemoPage;
