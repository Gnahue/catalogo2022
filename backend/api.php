<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
include_once('cnnMySql.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

function quitar_tildes($cadena)
{
	$no_permitidas = array("á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "ñ", "À", "Ã", "Ì", "Ò", "Ù", "Ã™", "Ã ", "Ã¨", "Ã¬", "Ã²", "Ã¹", "ç", "Ç", "Ã¢", "ê", "Ã®", "Ã´", "Ã»", "Ã‚", "ÃŠ", "ÃŽ", "Ã”", "Ã›", "ü", "Ã¶", "Ã–", "Ã¯", "Ã¤", "«", "Ò", "Ã", "Ã„", "Ã‹");
	$permitidas = array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "n", "N", "A", "E", "I", "O", "U", "a", "e", "i", "o", "u", "c", "C", "a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "u", "o", "O", "i", "a", "e", "U", "I", "A", "E");
	$texto = str_replace($no_permitidas, $permitidas, $cadena);
	return $texto;
}
switch ($_REQUEST['accion']) {

	case "GET_CORTANTES":

		$page = $_REQUEST['page'];
		$limitperpage =  $_REQUEST['limit'];
		$desde = $page * $limitperpage;
		$busqueda = $_REQUEST['busqueda'];

		$AltaF = new cnnMySql;
		$AltaF->Procedimiento  = "apiGetCortantes";
		$AltaF->parametros = array($desde, $limitperpage, quitar_tildes($busqueda));
		$AltaF->procesarPro();
		$AltaF->datosObjeto = true;

		//$results = json_encode($AltaF->registros);
		//$res = json_encode("{info:{count:22,pages:345,next:http:vicortantes.com.ar/catalogo/backend/api.php?next=2,prev:null},".$AltaF->registros);

		$result = $AltaF->registros;
		$count = $result[0]['count_res'];
		$pages = ceil ($count / $limitperpage);
		$info = ['count' => $count, 'pages' => $pages];
		$final = ['info' => $info, 'results' => $result];

		// $res = array_push($final,$info);
		// print_r($res);
		print_r(json_encode($final));
		break;
}
