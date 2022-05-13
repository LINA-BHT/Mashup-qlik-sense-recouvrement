/*
 *    Fill in host and port for Qlik engine
 */
const config = {
	host: 'n0o9aceea0yezp0.eu.qlikcloud.com', //for example, 'abc.us.example.com'
	prefix: '/',
	port: 443,
	isSecure: true,
	webIntegrationId: 'J0Jyag4Ip0hiswRDozmW40P1Z2hFgrdj',
  };
  require.config({
	baseUrl:"https://"+ config.host + "/resources",
	webIntegrationId: config.webIntegrationId,
  });
  
  
  require(['js/qlik'], (qlik) => {
	qlik.on('error', (error) => console.error(error));
  
  
	  //callbacks -- inserted here --
	  //open apps -- inserted here --
	  
	  const app = qlik.openApp('8df8290e-2434-4444-a9ef-5a70820f8588', config);



	//callbacks -- inserted here --
	//open apps -- inserted here --
	
	
	
	
	
		//get objects -- inserted here --
	app.getObject('qvfilter','zyJXY');
	
	
	
	
	app.getObject('QV2-02','gjSvJg');
	app.getObject('qvfilters1','kVPDbRJ');
	
	
	
	
	
	app.getObject('KPI-0144','feGUnG');
	
	
	
	app.getObject('QV1-01000','jCTJJ');
	app.getObject('QV1-0100000','CZuPE');
	app.getObject('QV1-001','qPMKp');
	app.getObject('QV1-003','cJUT');
	
	app.getObject('QV1-0000','nHLuQJ');
	app.getObject('QV1-000','YFFFcs');
	
	
	app.getObject('QV1-005','JFbNJM');
	
	app.getObject('KPI-003','jrNPJNp');
	app.getObject('KPI-002','eEnav');
	app.getObject('KPI-001','YEGZk');
	app.getObject('QV2-07','YFFFcs');
	app.getObject('KPI-01555','YEGZk');
	
	
	app.getObject('KPI-01666','kqDxPwX');
	app.getObject('QV2-04','MnsBPhk');
	app.getObject('QV1-01','ZQzAJmP');
	app.getObject('QV1-03','JznxCf');
	app.getObject('QV1-0','bxxzfPB');
	
	app.getObject('QV1-00','jmHKaBF');
	app.getObject('QV1-04','FYjLJB');
	app.getObject('QV1-05','ehpx');
	app.getObject('KPI-02','jgzeQT');
	app.getObject('KPI-03','ayZP');
	app.getObject('KPI-04','SThNZLm');
	
	
	
	app.getObject('KPI-01','zQqh');
	app.getObject('QV3-0100','jpuu');
	app.getObject('QV1-1000','TRvHYj');
	
	app.getObject('QV3-0300','VJHxt');
	app.getObject('QV1-01400','sJRma');
	app.getObject('QV3-01','PSaNmTL');
	
	
	app.getObject('QV3-0111','zFVMt');
	
	
	
	app.getObject('QV3-0222','ZFEmtgN');
	
	app.getObject('QV3-03','QcmCL');
	
	app.getObject('QV3-02','LJM');
	app.getObject('QV1-10','mHnCJd');
	app.getObject('QV1-010','gjSvJg');
	app.getObject('QV1-014','cRuNk');
	app.getObject('KPI-014','UNxAK');
	app.getObject('KPI-013','WqAzJup');
	
	
	app.getObject('KPI-012','hCKMjAv');
	app.getObject('KPI-011','feGUnG');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


	
	app.getObject('CurrentSelections','CurrentSelections');
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	

	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//create cubes and lists -- inserted here --


	if (app) {
		
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});