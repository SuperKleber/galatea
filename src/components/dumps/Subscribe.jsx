import React from "react";

// Este componente es un formulario para registrarse al sistema
// de email automático de galatea que se encuentra en MailChimp,

// MailChimp tiene una funcionalidad de hacer un formulario embebido para que se registre el contacto
// en tu web y la información vaya directamente a la base de datos de mailchimp,
// para adaptar ese formulario a los estilos de bootstrap sólo dejé los "NAME" de los inputs y el "action" del form.

// Sugiero hacer una base de datos y que este formulario almacene los datos en la base de datos, y que esta misma se conecte a mailchimp con un webhooks (consultar info en la documentación de mailchimp)

// PROPS:
// "emailOnly": si es "true" sólo pedirá el email (que es el único campo obligatorio), si es "false
// mostrará todos los campos"

export default function Subscribe(props) {
  const { emailOnly } = props;
  return (
    <div id="mc_embed_signup " className="mt-4">
      <form
        className="form container justify-content-center align-items-center flex-column flex-md-row"
        action="/"
        method="post"
        data-netlify="true"
        netlify="true"
        id="mc-embedded-subscribe-form"
        name="contacto"
      >
        <input type="hidden" name="form-name" value="contacto" hidden />
        <div className="form-group row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
          <label htmlFor="inputEmail" className="mr-2 sr-only">
            Email
          </label>
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="form-control"
            id="inputEmail"
            placeholder="Email (campo requerido)"
          />
        </div>
        {!emailOnly && (
          <div className="form-group row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
            <label htmlFor="mce-FNAME" className="mr-2 sr-only">
              Nombre
            </label>
            <input
              placeholder="Nombre"
              type="text"
              defaultValue=""
              name="NOMBRE"
              className="form-control"
              id="mce-FNAME"
            />
          </div>
        )}
        {!emailOnly && (
          <div className="form-group row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
            <label htmlFor="mce-LNAME" className="mr-2 sr-only">
              Apellido
            </label>
            <input
              placeholder="Apellido"
              type="text"
              defaultValue=""
              name="APELLIDO"
              className="form-control"
              id="mce-LNAME"
            />
          </div>
        )}
        {!emailOnly && (
          <div className="form-group row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
            <label htmlFor="mce-ADDRESS-addr1" className="mr-2 sr-only">
              Dirección
            </label>
            <input
              placeholder="Dirección"
              type="text"
              defaultValue=""
              maxLength="70"
              name="DIRECCION"
              id="mce-ADDRESS-addr1"
              className="form-control"
            />
          </div>
        )}
        {!emailOnly && (
          <div className="form-group row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
            <label htmlFor="mce-ADDRESS-country" className="mr-2 sr-only">
              País
            </label>
            <select
              placeholder="País"
              name="PAIS"
              id="mce-ADDRESS-country"
              className="form-control"
            >
              <option defaultValue="164">USA</option>
              <option defaultValue="286">Aaland Islands</option>
              <option defaultValue="274">Afghanistan</option>
              <option defaultValue="2">Albania</option>
              <option defaultValue="3">Algeria</option>
              <option defaultValue="178">American Samoa</option>
              <option defaultValue="4">Andorra</option>
              <option defaultValue="5">Angola</option>
              <option defaultValue="176">Anguilla</option>
              <option defaultValue="175">Antigua And Barbuda</option>
              <option defaultValue="6">Argentina</option>
              <option defaultValue="7">Armenia</option>
              <option defaultValue="179">Aruba</option>
              <option defaultValue="8">Australia</option>
              <option defaultValue="9">Austria</option>
              <option defaultValue="10">Azerbaijan</option>
              <option defaultValue="11">Bahamas</option>
              <option defaultValue="12">Bahrain</option>
              <option defaultValue="13">Bangladesh</option>
              <option defaultValue="14">Barbados</option>
              <option defaultValue="15">Belarus</option>
              <option defaultValue="16">Belgium</option>
              <option defaultValue="17">Belize</option>
              <option defaultValue="18">Benin</option>
              <option defaultValue="19">Bermuda</option>
              <option defaultValue="20">Bhutan</option>
              <option defaultValue="21" select={"true"}>
                Bolivia
              </option>
              <option defaultValue="325">
                Bonaire, Saint Eustatius and Saba
              </option>
              <option defaultValue="22">Bosnia and Herzegovina</option>
              <option defaultValue="23">Botswana</option>
              <option defaultValue="181">Bouvet Island</option>
              <option defaultValue="24">Brazil</option>
              <option defaultValue="180">Brunei Darussalam</option>
              <option defaultValue="25">Bulgaria</option>
              <option defaultValue="26">Burkina Faso</option>
              <option defaultValue="27">Burundi</option>
              <option defaultValue="28">Cambodia</option>
              <option defaultValue="29">Cameroon</option>
              <option defaultValue="30">Canada</option>
              <option defaultValue="31">Cape Verde</option>
              <option defaultValue="32">Cayman Islands</option>
              <option defaultValue="33">Central African Republic</option>
              <option defaultValue="34">Chad</option>
              <option defaultValue="35">Chile</option>
              <option defaultValue="36">China</option>
              <option defaultValue="185">Christmas Island</option>
              <option defaultValue="37">Colombia</option>
              <option defaultValue="204">Comoros</option>
              <option defaultValue="38">Congo</option>
              <option defaultValue="183">Cook Islands</option>
              <option defaultValue="268">Costa Rica</option>
              <option defaultValue="275">Cote D'Ivoire</option>
              <option defaultValue="40">Croatia</option>
              <option defaultValue="276">Cuba</option>
              <option defaultValue="298">Curacao</option>
              <option defaultValue="41">Cyprus</option>
              <option defaultValue="42">Czech Republic</option>
              <option defaultValue="318">
                Democratic Republic of the Congo
              </option>
              <option defaultValue="43">Denmark</option>
              <option defaultValue="44">Djibouti</option>
              <option defaultValue="289">Dominica</option>
              <option defaultValue="187">Dominican Republic</option>
              <option defaultValue="45">Ecuador</option>
              <option defaultValue="46">Egypt</option>
              <option defaultValue="47">El Salvador</option>
              <option defaultValue="48">Equatorial Guinea</option>
              <option defaultValue="49">Eritrea</option>
              <option defaultValue="50">Estonia</option>
              <option defaultValue="51">Ethiopia</option>
              <option defaultValue="189">Falkland Islands</option>
              <option defaultValue="191">Faroe Islands</option>
              <option defaultValue="52">Fiji</option>
              <option defaultValue="53">Finland</option>
              <option defaultValue="54">France</option>
              <option defaultValue="193">French Guiana</option>
              <option defaultValue="277">French Polynesia</option>
              <option defaultValue="56">Gabon</option>
              <option defaultValue="57">Gambia</option>
              <option defaultValue="58">Georgia</option>
              <option defaultValue="59">Germany</option>
              <option defaultValue="60">Ghana</option>
              <option defaultValue="194">Gibraltar</option>
              <option defaultValue="61">Greece</option>
              <option defaultValue="195">Greenland</option>
              <option defaultValue="192">Grenada</option>
              <option defaultValue="196">Guadeloupe</option>
              <option defaultValue="62">Guam</option>
              <option defaultValue="198">Guatemala</option>
              <option defaultValue="270">Guernsey</option>
              <option defaultValue="63">Guinea</option>
              <option defaultValue="65">Guyana</option>
              <option defaultValue="200">Haiti</option>
              <option defaultValue="66">Honduras</option>
              <option defaultValue="67">Hong Kong</option>
              <option defaultValue="68">Hungary</option>
              <option defaultValue="69">Iceland</option>
              <option defaultValue="70">India</option>
              <option defaultValue="71">Indonesia</option>
              <option defaultValue="278">Iran</option>
              <option defaultValue="279">Iraq</option>
              <option defaultValue="74">Ireland</option>
              <option defaultValue="323">Isle of Man</option>
              <option defaultValue="75">Israel</option>
              <option defaultValue="76">Italy</option>
              <option defaultValue="202">Jamaica</option>
              <option defaultValue="78">Japan</option>
              <option defaultValue="288">Jersey (Channel Islands)</option>
              <option defaultValue="79">Jordan</option>
              <option defaultValue="80">Kazakhstan</option>
              <option defaultValue="81">Kenya</option>
              <option defaultValue="203">Kiribati</option>
              <option defaultValue="82">Kuwait</option>
              <option defaultValue="83">Kyrgyzstan</option>
              <option defaultValue="84">
                Lao People's Democratic Republic
              </option>
              <option defaultValue="85">Latvia</option>
              <option defaultValue="86">Lebanon</option>
              <option defaultValue="87">Lesotho</option>
              <option defaultValue="88">Liberia</option>
              <option defaultValue="281">Libya</option>
              <option defaultValue="90">Liechtenstein</option>
              <option defaultValue="91">Lithuania</option>
              <option defaultValue="92">Luxembourg</option>
              <option defaultValue="208">Macau</option>
              <option defaultValue="93">Macedonia</option>
              <option defaultValue="94">Madagascar</option>
              <option defaultValue="95">Malawi</option>
              <option defaultValue="96">Malaysia</option>
              <option defaultValue="97">Maldives</option>
              <option defaultValue="98">Mali</option>
              <option defaultValue="99">Malta</option>
              <option defaultValue="207">Marshall Islands</option>
              <option defaultValue="210">Martinique</option>
              <option defaultValue="100">Mauritania</option>
              <option defaultValue="212">Mauritius</option>
              <option defaultValue="241">Mayotte</option>
              <option defaultValue="101">Mexico</option>
              <option defaultValue="102">Moldova, Republic of</option>
              <option defaultValue="103">Monaco</option>
              <option defaultValue="104">Mongolia</option>
              <option defaultValue="290">Montenegro</option>
              <option defaultValue="294">Montserrat</option>
              <option defaultValue="105">Morocco</option>
              <option defaultValue="106">Mozambique</option>
              <option defaultValue="242">Myanmar</option>
              <option defaultValue="107">Namibia</option>
              <option defaultValue="108">Nepal</option>
              <option defaultValue="109">Netherlands</option>
              <option defaultValue="110">Netherlands Antilles</option>
              <option defaultValue="213">New Caledonia</option>
              <option defaultValue="111">New Zealand</option>
              <option defaultValue="112">Nicaragua</option>
              <option defaultValue="113">Niger</option>
              <option defaultValue="114">Nigeria</option>
              <option defaultValue="217">Niue</option>
              <option defaultValue="214">Norfolk Island</option>
              <option defaultValue="272">North Korea</option>
              <option defaultValue="116">Norway</option>
              <option defaultValue="117">Oman</option>
              <option defaultValue="118">Pakistan</option>
              <option defaultValue="222">Palau</option>
              <option defaultValue="282">Palestine</option>
              <option defaultValue="119">Panama</option>
              <option defaultValue="219">Papua New Guinea</option>
              <option defaultValue="120">Paraguay</option>
              <option defaultValue="121">Peru</option>
              <option defaultValue="122">Philippines</option>
              <option defaultValue="221">Pitcairn</option>
              <option defaultValue="123">Poland</option>
              <option defaultValue="124">Portugal</option>
              <option defaultValue="126">Qatar</option>
              <option defaultValue="315">Republic of Kosovo</option>
              <option defaultValue="127">Reunion</option>
              <option defaultValue="128">Romania</option>
              <option defaultValue="129">Russia</option>
              <option defaultValue="130">Rwanda</option>
              <option defaultValue="205">Saint Kitts and Nevis</option>
              <option defaultValue="206">Saint Lucia</option>
              <option defaultValue="324">Saint Martin</option>
              <option defaultValue="237">
                Saint Vincent and the Grenadines
              </option>
              <option defaultValue="132">Samoa (Independent)</option>
              <option defaultValue="227">San Marino</option>
              <option defaultValue="255">Sao Tome and Principe</option>
              <option defaultValue="133">Saudi Arabia</option>
              <option defaultValue="134">Senegal</option>
              <option defaultValue="326">Serbia</option>
              <option defaultValue="135">Seychelles</option>
              <option defaultValue="136">Sierra Leone</option>
              <option defaultValue="137">Singapore</option>
              <option defaultValue="302">Sint Maarten</option>
              <option defaultValue="138">Slovakia</option>
              <option defaultValue="139">Slovenia</option>
              <option defaultValue="223">Solomon Islands</option>
              <option defaultValue="140">Somalia</option>
              <option defaultValue="141">South Africa</option>
              <option defaultValue="257">
                South Georgia and the South Sandwich Islands
              </option>
              <option defaultValue="142">South Korea</option>
              <option defaultValue="311">South Sudan</option>
              <option defaultValue="143">Spain</option>
              <option defaultValue="144">Sri Lanka</option>
              <option defaultValue="293">Sudan</option>
              <option defaultValue="146">Suriname</option>
              <option defaultValue="225">Svalbard and Jan Mayen Islands</option>
              <option defaultValue="147">Swaziland</option>
              <option defaultValue="148">Sweden</option>
              <option defaultValue="149">Switzerland</option>
              <option defaultValue="285">Syria</option>
              <option defaultValue="152">Taiwan</option>
              <option defaultValue="260">Tajikistan</option>
              <option defaultValue="153">Tanzania</option>
              <option defaultValue="154">Thailand</option>
              <option defaultValue="233">Timor-Leste</option>
              <option defaultValue="155">Togo</option>
              <option defaultValue="232">Tonga</option>
              <option defaultValue="234">Trinidad and Tobago</option>
              <option defaultValue="156">Tunisia</option>
              <option defaultValue="157">Turkey</option>
              <option defaultValue="158">Turkmenistan</option>
              <option defaultValue="287">Turks &amp; Caicos Islands</option>
              <option defaultValue="159">Uganda</option>
              <option defaultValue="161">Ukraine</option>
              <option defaultValue="162">United Arab Emirates</option>
              <option defaultValue="262">United Kingdom</option>
              <option defaultValue="163">Uruguay</option>
              <option defaultValue="165">Uzbekistan</option>
              <option defaultValue="239">Vanuatu</option>
              <option defaultValue="166">Vatican City State (Holy See)</option>
              <option defaultValue="167">Venezuela</option>
              <option defaultValue="168">Vietnam</option>
              <option defaultValue="169">Virgin Islands (British)</option>
              <option defaultValue="238">Virgin Islands (U.S.)</option>
              <option defaultValue="188">Western Sahara</option>
              <option defaultValue="170">Yemen</option>
              <option defaultValue="173">Zambia</option>
              <option defaultValue="174">Zimbabwe</option>
            </select>
          </div>
        )}
        {!emailOnly && (
          <div className="form-group row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
            <label htmlFor="mce-PHONE" className="mr-2 sr-only">
              Teléfono
            </label>
            <input
              placeholder="Teléfono"
              type="text"
              name="PHONE"
              className="form-control"
              defaultValue=""
              id="mce-PHONE"
            />
          </div>
        )}
        {!emailOnly && (
          <div className="form-group row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
            <label htmlFor="mce-COMPANY" className="mr-2 sr-only">
              Empresa
            </label>
            <input
              placeholder="Empresa"
              type="text"
              defaultValue=""
              name="COMPANY"
              className="form-control"
              id="mce-COMPANY"
            />
          </div>
        )}

        {!emailOnly && (
          <div className="form-group row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
            <label htmlFor="mce-PUESTO" className="mr-2 sr-only">
              Puesto en la empresa
            </label>
            <input
              placeholder="Puesto en la empresa"
              type="text"
              defaultValue=""
              name="PUESTO"
              className="form-control"
              id="mce-PUESTO"
            />
          </div>
        )}
        {!emailOnly && (
          <div className="form-group row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
            <label htmlFor="mce-PUESTO" className="mr-2 sr-only">
              Puesto en la empresa
            </label>
            <textarea
              placeholder="Mensaje"
              type="text"
              defaultValue=""
              name="MENSAJE"
              className="form-control"
              id="mce-PUESTO"
            />
          </div>
        )}
        <div className="form-group  row pr-4 pl-4 p-md-0 mx-sm-3 mb-2 d-flex justify-content-center">
          <button
            type="submit"
            id="mc-embedded-subscribe"
            className=" btn btn-success mb-2"
          >
            Enviar formulario
          </button>
        </div>
      </form>
      <style jsx="true">{``}</style>
    </div>
  );
}
