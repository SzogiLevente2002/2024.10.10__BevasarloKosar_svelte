
<script>
  export let  termekek
</script>

<h1>
  kosár
</h1>
<table>
  <tr>
    <th>Termék neve</th>
    <th>Ára</th>
    <th>Mennyiség</th>
    </tr>
    {#each  termekek as item }
    <tr>
      <td>{item.nev}</td>
      <td>{item.ar} Ft</td>
      <td> <input type="number" min="0">Db</td>
    </tr>
    {/each}
  </table>

  <style>
th,td {
  border: 2px solid black;
}

th {
  background-color: turquoise;

}
tr {
  background-color: greenyellow;

}

h1 {
  font-size: large;
  align-items: center;
}


    
  </style>
