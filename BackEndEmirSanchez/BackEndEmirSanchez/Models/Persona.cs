using System;
using System.Collections.Generic;

namespace BackEndEmirSanchez.Models;

public partial class Persona
{
    public int IdEmpleado { get; set; }

    public string? Nombres { get; set; }

    public string? PrimerApellido { get; set; }

    public string? SegundoApellido { get; set; }

    public string? Dni { get; set; }

    public DateTime? FechaNacimiento { get; set; }

    public string? Estado { get; set; }
}
