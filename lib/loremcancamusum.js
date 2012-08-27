/*
 * loremcancamusum
 * https://github.com/ivanloire/loremcancamusum
 *
 * Copyright (c) 2012 Iván Loire
 * Licensed under the MIT license.
 */

var lorem_cancamusum = {};
lorem_cancamusum.default_separator = "\n";

//---------------------------------------
// Definitions
//---------------------------------------
lorem_cancamusum.definitions = {

	det_masc_plur : ['los', 'algunos', 'los llamados',
		'todos y cada uno de los', 'todos los'],

	// roles
	roles_plur : ['CEOS', 'inversores', 'directores ejecutivos',
		'managers', 'visionarios', 'business angels', 'gestores',
		'emprendedores', 'community managers', 'CTOS',
		'consultores de social media', 'directores de proyecto',
		'expertos en comunicación', 'empresarios','analistas',
		'"entrepreneurs"', 'SEOS', 'expertos en SEM',
		'jefes de proyecto agiles', 'jefes de equipo'
	],

	verb_roles_plur : ['creen que', 'están convencidos de que', 'piensan que',
		'aseguran que', 'imaginan que', 'manifiestan que', 'intuyen que',
		'afirman que', 'certifican que', 'abogan por que'
	],

	// conceptos
	concept_masc_plur : ['resultados',
		'objetivos', 'valores al alza', 'recursos financieros',
		'objetivos de alianzas estratégicas', 'balances de cash flow',
		'canales de emprendimiento', 'niveles de endeudamiento',
		'recursos de financiación', 'activos fijos', 'activos circulantes',
		'indicadores de gestión', 'margenes brutos', 'pasivos inmobilizados',
		'activos de la empresa', 'mercados emergentes',
		'nuevos nichos de mercado', 'futuros resultados',
		'pasados resultados', 'balances generales', 'mecanismos',
		'recursos humanos', 'ciclos macro-económicos',
		'modelos de gestión', 'protocolos de actuación', 'sistemas', 'planes futuros'
	],

	verb_concepto_infinitivo_plural : ['sobreponerse a', 'mantenerse activos frente a',
		'evolucionar ante', 'impulsar', 'adaptarse a', 'anticiparse a','sobrellevar los',
		'claudicar ante'
	],

	adj_concepto_masculinos_plural : ['de forma correcta', 'correctamente posicionados',
		'de forma moderada', 'adecuadamente contextualizados', 'elevados',
		'sintonizados con el mercado local',
		'comúnmente utilizados', 'en su justa medida', 'de manera clara', 'rápidamente',
		'de forma eficaz', 'de manera conjunta', 'de forma sólida', 'como Dios manda',
		'de forma rápida', 'saturados', 'con carácter sinérgico'
	],

	//verbos
	verb_condicional_plural : ['deberían', 'podrían'],

	verb_estado_infinitivo_plural : ['estar', 'mantenerse', 'posicionarse',
		'llegar a estar'
	],

	verb_futuro : ['se enfrentarán a', 'verán disminuido su ROI frente a',
		'verán mermado el valor neto frente a', 'verán comprometida su visiónperiférica ante'],

	//proposiciones, conjunciones, etc.
	puentes : ['para', 'en caso de que tengan que'],

	o : [', o'],

	y : ['y'],

	si : ['si']
};

//---------------------------------------
// Helpers
//---------------------------------------
lorem_cancamusum.Helpers = {
	create_paragraph : function (estructura, before, after){
		return before + estructura.map(this.rnd_paragraph, this).join(' ') + after;
	},

	rnd : function (arr){
		return arr[Math.floor(Math.random() * (arr.length))];
	},

	rnd_paragraph : function (palabra){
		return this.rnd(lorem_cancamusum.definitions[palabra]);
	}
};

//---------------------------------------
// Cancamuse it!
//---------------------------------------
lorem_cancamusum.cancamuse = function(paragraphs, before, after) {

	var estructuras_semanticas = [

		//------------
		// Estructura larga, con conjunción disyuntiva
		//------------
		[
			//los / inversores / creen que
			'det_masc_plur', 'roles_plur', 'verb_roles_plur',

			//los / objetivos
			'det_masc_plur', 'concept_masc_plur',

			//deberían / mantener
			'verb_condicional_plural', 'verb_concepto_infinitivo_plural',

			//los / recursos de financiación /
			'det_masc_plur', 'concept_masc_plur', 'adj_concepto_masculinos_plural',

			//para / estar / adecuadamente contextualizados
			'puentes', 'verb_estado_infinitivo_plural', 'adj_concepto_masculinos_plural',

			//o
			'o',
			//una / algunos / resultados / verán mermados su valor neto frente a
			'det_masc_plur', 'concept_masc_plur', 'verb_futuro',

			//algunos / activos fijos
			'det_masc_plur', 'concept_masc_plur'
		],

		//------------
		// Estructura corta, sin conjunción disyuntiva, y con "para"
		//------------
		[
			//algunos / inversores / creen que
			'det_masc_plur', 'roles_plur', 'verb_roles_plur',

			//los / objetivos
			'det_masc_plur', 'concept_masc_plur',

			//deberían / mantener
			'verb_condicional_plural', 'verb_concepto_infinitivo_plural',

			//los / balances de cash flow / en su justa medida
			'det_masc_plur', 'concept_masc_plur', 'adj_concepto_masculinos_plural',

			//para / estar / alineados
			'puentes', 'verb_estado_infinitivo_plural', 'adj_concepto_masculinos_plural'
		],


		//------------
		// Estructura corta, sin conjunción disyuntiva, y sin  "para"
		//------------
		[
			//todos los / inversores / y / CTOS / creen que
			'det_masc_plur', 'roles_plur', 'y', 'roles_plur', 'verb_roles_plur',

			//los / objetivos
			'det_masc_plur', 'concept_masc_plur',

			//deberían / mantener
			'verb_condicional_plural', 'verb_concepto_infinitivo_plural',

			//los / margenes brutos / en la medida correcta
			'det_masc_plur', 'concept_masc_plur', 'adj_concepto_masculinos_plural'
		]
	];

	if (before === undefined){
		before = this.default_separator;
	}

	var items = [];
	for (var i = 0; i < paragraphs;  i++) {
		items.push(this.Helpers.create_paragraph(this.Helpers.rnd(estructuras_semanticas), before, after || ''));
	}

	return items.join('');
};

//module export for node.js
if(typeof exports != "undefined"){ module.exports = lorem_cancamusum; }