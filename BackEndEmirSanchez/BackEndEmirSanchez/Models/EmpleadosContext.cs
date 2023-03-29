using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BackEndEmirSanchez.Models;

public partial class EmpleadosContext : DbContext
{
    public EmpleadosContext()
    {
    }

    public EmpleadosContext(DbContextOptions<EmpleadosContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Persona> Personas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Persona>(entity =>
        {
            entity.HasKey(e => e.IdEmpleado).HasName("PK__personas__CE6D8B9E53FFB488");

            entity.ToTable("personas");

            entity.Property(e => e.Dni)
                .HasMaxLength(8)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("dni");
            entity.Property(e => e.Estado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("estado");
            entity.Property(e => e.FechaNacimiento)
                .HasColumnType("date")
                .HasColumnName("fecha_nacimiento");
            entity.Property(e => e.Nombres)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("nombres");
            entity.Property(e => e.PrimerApellido)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("primer_apellido");
            entity.Property(e => e.SegundoApellido)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("segundo_apellido");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
